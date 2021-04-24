import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

   return  null;
}
