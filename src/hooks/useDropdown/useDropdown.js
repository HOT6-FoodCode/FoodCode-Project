import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { isOpen, ref, toggle };
};

export default useDropdown;
