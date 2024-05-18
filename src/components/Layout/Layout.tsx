interface Props extends React.PropsWithChildren {}

export function Layout({children}: Props) {
    return (
        <section>
            <div className="container py-8">
                {children}
            </div>
        </section>
    )
}