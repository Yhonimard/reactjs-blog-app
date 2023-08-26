const AuthInput = ({ name, type, register }) => {
  return (
    // <div className="mb-3">
    <>
      <label className="label">
        <label className="label-text text-base block">{name}</label>
      </label>
      <input
        type={type || "text"}
        className="input w-full input-bordered"
        placeholder={name}
        {...register(name)}
      />
    </>
    // </div>
  );
};

export default AuthInput;
