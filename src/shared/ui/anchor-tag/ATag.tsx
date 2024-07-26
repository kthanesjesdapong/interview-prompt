import { HTMLProps } from 'react';
type ATagProps = HTMLProps<HTMLAnchorElement>;

export const ATag = (props: ATagProps) => {
  return (
    <a
      {...props}
      className='p-2 rounded-lg transition-opacity hover:opacity-85 bg-blue-500 text-white space-x-2'>
      {props.children}
    </a>
  );
};
