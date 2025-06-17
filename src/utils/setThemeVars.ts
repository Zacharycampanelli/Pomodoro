export function setTypographyVars(tokens: Record<string,string>) { 
     const root = document.documentElement;
     Object.entries(tokens).forEach(([key, value]) => {
         root.style.setProperty(key, value);
     })
}