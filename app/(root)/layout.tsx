import SideNav from "@/components/shared/SideNav"

export default function ComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="size-full flex flex-row gap-6 lg:gap-12" suppressHydrationWarning>
            <div className="hidden sm:flex h-full w-[35%] lg:w-1/4">
                <SideNav />
            </div>
            {children}
        </section>
    )
}