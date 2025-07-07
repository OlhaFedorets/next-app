export default function ProductDetailssLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-green-400">
            <aside>
                <h3>Recommended</h3>
            </aside>
            <h3>All Products</h3>
            <main>{children}</main>
        </div>
    );
}
