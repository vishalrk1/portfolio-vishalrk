interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-8xl bg-BgBlack">{children}</div>;
};

export default Container;
