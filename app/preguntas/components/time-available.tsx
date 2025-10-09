export const TimeAvailable = () => {
  return (
    <div className="flex items-center gap-x-3 bg-blue-300 w-min p-2 rounded-md text-xs font-bold">
      <span className="pi pi-clock" />
      <div className="flex flex-col items-center ">
        <h3>19</h3>
        <h3>Minutos</h3>
      </div>
      :
      <div className="flex flex-col items-center">
        <h3>19</h3>
        <h3>Segundos</h3>
      </div>
    </div>
  );
};
