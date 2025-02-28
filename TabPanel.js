import UploadTab from './UploadTab';
import AnalysisTab from './AnalysisTab';
import SettingsTab from './SettingsTab';

export default function TabPanel({ activeTab, setActiveTab }) {
  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('upload')}>Upload</button>
        <button onClick={() => setActiveTab('analysis')}>Análise</button>
        <button onClick={() => setActiveTab('settings')}>Configurações</button>
      </div>
      {activeTab === 'upload' && <UploadTab />}
      {activeTab === 'analysis' && <AnalysisTab />}
      {activeTab === 'settings' && <SettingsTab />}
    </div>
  );
}
