


const StyleSkeleton = () => {
    return (
        <div className="rounded-lg overflow-hidden bg-card shadow-card">
            <div className="aspect-3/4 bg-muted animate-pulse" />
            <div className="p-3 space-y-2">
                <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
            </div>
        </div>
    );
};

export const StyleGridSkeleton = ({ count = 4 }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <StyleSkeleton key={i} />
            ))}
        </div>
    );
};
export default StyleSkeleton

