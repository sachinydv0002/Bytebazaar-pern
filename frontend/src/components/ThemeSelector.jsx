import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">

      {/* BUTTON */}
      <button className="btn btn-ghost btn-square" aria-label="Choose theme" aria-haspopup="true">
        <PaletteIcon className="size-5" />
      </button>

      {/* DROPDOWN */}
      <div className="dropdown-content z-50 mt-2 w-56 max-w-[calc(100vw-1rem)] rounded-2xl border border-base-content/10 bg-base-200 p-2 shadow-2xl">

        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={`flex min-h-11 w-full items-center gap-3 rounded-lg px-4 py-2 ${
              theme === themeOption.name
                ? "bg-primary/10 text-primary"
                : "hover:bg-base-content/10"
            }`}
          >
            <PaletteIcon className="size-4" />

            <span className="text-sm">{themeOption.label}</span>

            {/* COLORS */}
            <div className="ml-auto flex gap-1">
              {themeOption.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}

      </div>
    </div>
  );
}

export default ThemeSelector;
