import { useState, useCallback } from 'react';

function usePopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const togglePopover = useCallback((event) => {
    setAnchorEl((p) => (p ? null : event?.currentTarget));
  }, []);

  return {
    anchorEl,
    isOpen: Boolean(anchorEl),
    setAnchorEl,
    togglePopover,
  };
}

export default usePopover;
