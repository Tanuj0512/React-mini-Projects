import UseLocalStroage from "./UseLocalStorage";
import "./theme.css";

export default function LightDark() {
  const [theme, setTheme] = UseLocalStroage("theme", "dark");

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <div className="light-dark" data-theme={theme}>
      <div className="LD-container">
        <p>Hello World !!</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}
