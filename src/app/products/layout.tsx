export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-amber-400">
            <h1>All Products</h1>
            <div >{children}</div>
        </div>
    );
}
