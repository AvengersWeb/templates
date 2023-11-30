import Button3 from './buttons/Button3';
import Button1 from './buttons/Button1';
import Button2 from './buttons/Button2';

const ButtonTemplates = () => {
  return (
    <div className="min-h-screen text-black mt-36">
      <div className="container mx-auto px-4 font-secondary">
        <Button1 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button2 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button3 />
      </div>
    </div>
  );
};

export default ButtonTemplates;
