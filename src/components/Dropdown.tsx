import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { DropdownOption } from '../types';

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
  placeholder?: string;
  selected?: DropdownOption;
  variant?: 'default' | 'dark';
}

export default function Dropdown({ options, onSelect, placeholder = 'Select...', selected, variant = 'default' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseBtn = 'flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors border';
  const defaultBtn = 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700';
  const darkBtn = 'bg-gray-900 border-gray-800 hover:bg-gray-800 text-white';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseBtn} ${variant === 'dark' ? darkBtn : defaultBtn}`}
        style={variant === 'dark' && selected?.color ? { backgroundColor: selected.color, borderColor: 'transparent', color: '#fff' } : undefined}
      >
        <span className={variant === 'dark' ? 'text-white' : (selected ? 'text-gray-900' : 'text-gray-500')} style={variant === 'dark' && selected?.color ? { color: '#fff' } : undefined}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 ${variant === 'dark' ? 'text-white/80' : 'text-gray-400'} transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm first:rounded-t-lg last:rounded-b-lg transition-colors ${option.color ? 'text-white' : 'hover:bg-gray-50'}`}
              style={option.color ? { backgroundColor: option.color } : undefined}
            >
              <div className="flex items-center gap-2">
                {option.color && (
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: option.color }}
                  />
                )}
                {option.label}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
