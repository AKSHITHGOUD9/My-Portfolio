

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const useAnalytics = () => {
    const trackPageView = (url: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'G-Z7023NPV1K', {
                page_path: url,
            });
        }
    };

    const trackEvent = (action: string, category: string, label?: string, value?: number) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        }
    };

    const trackButtonClick = (buttonName: string) => {
        trackEvent('click', 'button', buttonName);
    };

    const trackSectionView = (sectionName: string) => {
        trackEvent('view', 'section', sectionName);
    };

    const trackDownload = (fileName: string) => {
        trackEvent('download', 'file', fileName);
    };

    const trackExternalLink = (url: string) => {
        trackEvent('click', 'external_link', url);
    };

    return {
        trackPageView,
        trackEvent,
        trackButtonClick,
        trackSectionView,
        trackDownload,
        trackExternalLink,
    };
}; 