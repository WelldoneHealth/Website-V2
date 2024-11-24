import { useState, useEffect, useRef, useCallback } from "react";
import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Skeleton } from "@/components/ui/skeleton";
import { Check } from "lucide-react";
import debounce from "lodash/debounce";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const AutoComplete = ({
  fetchData, // Fetch function passed dynamically (like fetchUserList)
  emptyMessage = "No results found",
  value = null,
  onValueChange = () => {},
  disabled = false,
  placeholder = "Select an option",
  onOptionClick = () => {}, // New prop for handling onClick
}) => {
  const inputRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [inputValue, setInputValue] = useState(value?.label || "");
  const [searchText, setSearchText] = useState(""); // Local state for search text

  // Debounced version of the search input
  const handleSearchInputChange = useCallback(
    debounce((value) => {
      setSearchText(value);
    }, 500), // 500ms debounce
    []
  );

  // Fetch data using React Query when the search text changes
  const { data: options, isLoading: isQueryLoading } = useQuery({
    queryKey: ["searchResults", searchText], // Query key
    queryFn: () => fetchData(searchText), // Fetch function
    enabled: searchText.length > 0, // Only trigger the query if searchText has content
    // staleTime: 3000,
  });

  const handleKeyDown = useCallback(
    (event) => {
      const input = inputRef.current;
      if (!input) return;

      if (!isOpen) setOpen(true);

      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange(optionToSelect);
        }
      }

      if (event.key === "Escape") input.blur();
    },
    [isOpen, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label || "");
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption) => {
      setInputValue(selectedOption.label);
      setSelected(selectedOption);
      onValueChange(selectedOption);
      onOptionClick(selectedOption); // Trigger the onClick handler
      setTimeout(() => inputRef.current?.blur(), 0);
    },
    [onValueChange, onOptionClick]
  );

  return (
    <CommandPrimitive
      onKeyDown={handleKeyDown}
      className="asm:w-[70%] lg:w-[60%] px-6 py-3 asm:py-2 rounded-3xl text-[#919196] font-medium bg-white"
    >
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={(value) => {
            setInputValue(value);
            handleSearchInputChange(value); // Trigger debounced search
          }}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="text-base"
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
            isOpen ? "block" : "hidden"
          )}
        >
          <CommandList className="rounded-lg ring-1 ring-slate-200">
            {isQueryLoading ? (
              <div className="p-1">
                <Skeleton className="h-8 w-full" />
              </div>
            ) : null}
            {options?.length > 0 && !isQueryLoading ? (
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center gap-2",
                        !isSelected ? "pl-8" : null
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}
            {!isQueryLoading && options?.length === 0 ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
