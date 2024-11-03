import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-4 border-b-2'>
            <h1 className='text-2xl font-semibold   '>Knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;