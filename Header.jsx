import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef-img"/>
            <h1>Chef Roy</h1>
        </header>
    )
}