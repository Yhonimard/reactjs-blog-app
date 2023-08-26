function LogoutIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 30}
      height={size || 30}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke="#fff" strokeLinecap="round" strokeWidth="1.5">
        <path strokeLinejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"></path>
        <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121.641.642 1.568.815 3.121.862"></path>
      </g>
    </svg>
  );
}

export default LogoutIcon;
