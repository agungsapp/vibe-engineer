export interface SlideData {
  id: number;
  slug: string;
  category: 'STORY' | 'OBSERVATION' | 'CONNECTION' | 'INSIGHT' | 'DEVSECOPS' | 'AI AGENT' | 'MCP' | 'SECURITY' | 'BIG PICTURE' | 'IMPACT' | 'REVEAL';
  title: string;
  subtitle?: string;
  speakerNotes: string;
  durationSec: number;
}

export type RevealStep = 'idle' | 'freeze' | 'glitch' | 'zoomout' | 'layers' | 'complete';

export interface PipelineExecutionLog {
  id: string;
  timestamp: string;
  stage: 'REQUIREMENT' | 'AI_GENERATION' | 'SAST_SCAN' | 'DEPENDENCY_CHECK' | 'UNIT_TEST' | 'DEPLOY';
  status: 'pending' | 'running' | 'success' | 'warning' | 'error';
  message: string;
  details?: string;
}
