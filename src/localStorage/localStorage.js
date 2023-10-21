
export  const getStoredTheme = () =>{
    const storedTheme = localStorage.getItem('dark');
    if(storedTheme)
    {
        return JSON.parse(storedTheme);
    }
    return true;
}



