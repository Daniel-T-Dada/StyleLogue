import { Suspense } from "react";
import StylesClient from "./StylesClient";

export default function StylesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <StylesClient />
        </Suspense>
    );
}
