import React, { useEffect } from 'react'

function Translate() {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                autoDisplay: false,
            },
            'google_translate_element'
        );
    };

    useEffect(() => {
        // Check if the script has already been added
        if (!document.getElementById('google-translate-script')) {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.src =
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            addScript.async = true;

            addScript.onload = () => {
                // Once the script is loaded, initialize the translation
                window.googleTranslateElementInit = googleTranslateElementInit;
                googleTranslateElementInit();
            };

            document.body.appendChild(addScript);
            return () => {
                document.body.removeChild(addScript);
                delete window.googleTranslateElementInit;
            };
        } else {
            // If the script is already added, just initialize the translation
            googleTranslateElementInit();
        }
    }, []);

    return (
        <>
            <div id="google_translate_element" className="translate" />
        </>
    )
}

export default Translate