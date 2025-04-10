import Button from "./Button";

const NavLeft = ({ count }: { count: number }) => {
  return (
    <div className="w-auto text-white">
      <div className="flex flex-row justify-center items-center">
        <Button count={count} />
      </div>
    </div>
  );
};

export default NavLeft;
