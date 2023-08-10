function BotonesMenu({name_menu}) {
  return (
    <a
      key="Menu A"
      href="#"
      className="flex items-center text-sm font-medium text-neutral-200 border-b-4 border-b-slate-900 hover:text-neutral-400 hover:border-b-neutral-400 transition-colors w-20 justify-center"
    >
      {name_menu}
    </a>
  );
}

export default BotonesMenu;
