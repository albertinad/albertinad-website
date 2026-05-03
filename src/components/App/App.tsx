import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import messages from '@/i18n/en.json';
import { useTheme } from '@/hooks/useTheme';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/Home';
import { NotFoundPage } from '@/pages/NotFound';
import { pageCss, mainCss } from './styles';

const PARTICLE_CONFIG = {
  accentColor: '#22c55e',
  density: 70,
  speed: 0.35,
  connDist: 130,
} as const;

export const App = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <IntlProvider locale="en" messages={messages}>
      <BrowserRouter>
        <>
          <ParticleCanvas {...PARTICLE_CONFIG} theme={theme} />
          <div className={pageCss}>
            <Header isDark={isDark} onToggleTheme={toggleTheme} />
            <main className={mainCss}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      </BrowserRouter>
    </IntlProvider>
  );
};
