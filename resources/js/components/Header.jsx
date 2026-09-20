
const Header = () => {
  return (
    <div className="flex p-5 bg-black text-white justify-between h-15 items-center">
        <h1 className="text-2xl font-bold">VPLAK</h1>
        <nav className="flex gap-6 font-normal">
            <h2>PRODUCT</h2>
            <h2>BRAND</h2>
            <h2>CATEGORY</h2>
            <h2>BRAND CATEGORY</h2>
            <h2>ORDER'S PANEL</h2>
            <h2>BUYING GUIDE</h2>
            <h2>EXCEL</h2>
            <h2>SEO TEXT</h2>
        </nav>
        <h2 className="font-semibold">LOGOUT</h2>
    </div>
  )
}

export default Header