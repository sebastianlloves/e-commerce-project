function Logo() {
  return (
    <div className="m-2 flex">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto text-white"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
  );
}

export default Logo;
