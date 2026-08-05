interface CategoryHeaderProps {
    title: string;
    subtitle: string;
}

export function CategoryHeader({
    title,
    subtitle,
}: CategoryHeaderProps) {
    return (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Formación Profesional
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {title}
            </h1>

            <p className="mt-4 text-muted-foreground">
                {subtitle}
            </p>
        </div>
    );
}