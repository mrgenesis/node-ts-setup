import React, { ScriptHTMLAttributes } from "react";

interface IScriptAttrbutes extends React.DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> {
  setDeviceId: (id: string) => void;
  view: 'item';
  output: 'deviceId';
}

const SecutyScript: React.FC<IScriptAttrbutes> = ({ setDeviceId, ...scriptProps }) => {
  return (
    <>
      <input type="hidden" id="deviceId" onChange={e => setDeviceId(e.target.value)} />
      <script data-id='deviceId' { ...scriptProps }></script>
    </>
  );
}
export default SecutyScript;