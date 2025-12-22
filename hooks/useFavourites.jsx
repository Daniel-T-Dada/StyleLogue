'use client';

import { useState, useEffect, useCallback } from "react";

const FAVOURITES_KEY = "stylelogue_favourites";

export const useFavourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(FAVOURITES_KEY);
        if (stored) {
            try {
                setFavourites(JSON.parse(stored));
            } catch {
                setFavourites([]);
            }
        }
    }, []);

    const saveFavourites = useCallback((newFavourites) => {
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify(newFavourites));
        setFavourites(newFavourites);
    }, []);

    const toggleFavourite = useCallback(
        (styleId) => {
            const newFavourites = favourites.includes(styleId)
                ? favourites.filter((id) => id !== styleId)
                : [...favourites, styleId];

            saveFavourites(newFavourites);
        },
        [favourites, saveFavourites]
    );

    const isFavourite = useCallback(
        (styleId) => {
            return favourites.includes(styleId);
        },
        [favourites]
    );

    const clearFavourites = useCallback(() => {
        saveFavourites([]);
    }, [saveFavourites]);

    return {
        favourites,
        toggleFavourite,
        isFavourite,
        clearFavourites,
        favouriteCount: favourites.length,
    };
};
