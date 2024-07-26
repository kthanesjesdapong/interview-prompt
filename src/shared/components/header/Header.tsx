export const Header = () => {
  return (
    <nav className='absolute border w-full text-end p-[10px]'>
      <a
        href={'/'}
        className='p-2 rounded-lg transition-opacity hover:opacity-85 bg-blue-500 text-white space-x-2'>
        Products
      </a>
    </nav>
  );
};
