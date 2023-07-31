import { Nav } from "."


export default function Header() {
    return (
        <Nav.Root>
            <Nav.Container>
                <Nav.Logo /> 
                <Nav.About />
                <Nav.GithubLogo />
            </Nav.Container>
        </Nav.Root>
    )
}