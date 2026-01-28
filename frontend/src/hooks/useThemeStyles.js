import { useTheme } from '../context/ThemeContext';

export const useThemeStyles = () => {
  const { isDark, colors } = useTheme();

  return {
    isDark,
    colors,
    // Common style combinations
    container: {
      backgroundColor: colors.bg.primary,
    },
    card: {
      backgroundColor: colors.bg.secondary,
      borderColor: colors.border,
    },
    text: {
      color: colors.text.primary,
    },
    textSecondary: {
      color: colors.text.secondary,
    },
  };
};
