import './App.css';
import ProducImage from './components/Product/Image';
import React from 'react';
import { ICreatePreferenceStatus } from '../types/index';
import Product from './components/Data/Product';
import Customer from './components/Data/Customer';
import Button from './components/Button';
import rawData from './components/Data/raw-data';
import CreatePreferece from './http/create-preference';
import Loading from './components/Loading';

function App() {
  const [deviceId, setDeviceId] = React.useState<string>('');
  const [createPreferenceStatus, setCreatePreferenceStatus] = React.useState<ICreatePreferenceStatus>({
    hasDeviceId: false,
    fetch: 'stopped',
    limitVerify: 0,
    warning: '`deviceId` indisponível. Tente novamente.'
  });

  const handleDeviceId = (id: string) => {
    setCreatePreferenceStatus(state => ({ ...state, hasDeviceId: true }));
    setDeviceId(id);
  }
  const verifySessionId = () => { // @ts-expect-error
    const MP_DEVICE_SESSION_ID = window?.MP_DEVICE_SESSION_ID;
    if(MP_DEVICE_SESSION_ID) {
      handleDeviceId(MP_DEVICE_SESSION_ID);
    }
  }
  const handleFetch = async () => {
    verifySessionId();
    if(createPreferenceStatus.hasDeviceId === true) {
      setCreatePreferenceStatus((state => ({ ...state, fetch: 'sent' })));
      const createPreference = new CreatePreferece(rawData);
        createPreference.addHeader({ 'X-meli-session-id': deviceId });
        try {
          setCreatePreferenceStatus((state => ({ ...state, fetch: 'sent' })));
          await createPreference.fetch();
        } catch(e) {
          setCreatePreferenceStatus(state => ({ ...state, limitVerify: 0, fetch: 'stopped', warning: 'Error: veja o console' }));
          console.log(e);
        }
        // window.location.href = createPreference.initPoint();
      setCreatePreferenceStatus(state => ({ ...state, limitVerify: 0, fetch: 'stopped' }));
      console.log(createPreference.initPoint())

      return;
    }
    if(createPreferenceStatus.limitVerify < 20) {
      window.setTimeout(handleFetch, 500);
      setCreatePreferenceStatus(state => ({ ...state, limitVerify: state.limitVerify + 1 }));
      return;
    }
    setCreatePreferenceStatus(state => ({ ...state, limitVerify: 0, warning: 'Demorou para gerar o deviceId' }));
  }

  return (
    <div className="App">
      <main className="App-main">
        <ProducImage />
        <Product />
        <Customer />
        <Loading shouldDisplay={(createPreferenceStatus.fetch === 'sent')} />
         <span style={{color: 'yellow'}}>{createPreferenceStatus.fetch !== 'stopped' && createPreferenceStatus.warning}</span>
         <Button onClick={handleFetch} />
      </main>
      <input type="hidden" id="deviceId" value={deviceId} onChange={e => handleDeviceId(e.target.value)} />      
    </div>
  );
}

export default App;
