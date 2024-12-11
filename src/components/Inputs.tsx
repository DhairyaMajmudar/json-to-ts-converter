type Props = {
  label: string;
};

export function Inputs({ label }: Props) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">{label}</label>
        <input className="border border-gray-400 rounded-md px-2 py-1" />
      </div>
    </>
  );
}
