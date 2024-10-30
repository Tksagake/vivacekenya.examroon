import { useEffect, useRef } from 'react';
import ABCJS from 'abcjs';

interface Props {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const MusicNotation = ({ value, onChange, readOnly = false }: Props) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    if (!readOnly && editorRef.current) {
      const editor = new ABCJS.Editor(editorRef.current, {
        canvas_id: visualRef.current,
        warnings_id: 'warnings',
        abcjsParams: { responsive: 'resize' },
      });

      editor.addChangeListener(() => {
        if (editorRef.current) {
          onChange(editorRef.current.value);
        }
      });
    } else {
      ABCJS.renderAbc(visualRef.current, value, {
        responsive: 'resize',
      });
    }
  }, [value, onChange, readOnly]);

  return (
    <div className="space-y-4">
      {!readOnly && (
        <textarea
          ref={editorRef}
          className="w-full h-32 p-2 border rounded"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <div ref={visualRef} className="border rounded p-4 bg-white" />
      <div id="warnings" className="text-red-500" />
    </div>
  );
};