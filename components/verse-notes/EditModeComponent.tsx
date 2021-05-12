import { Component } from 'react';
import { VerseNoteGroup } from '../../oith-lib/src/verse-notes/verse-note';
import { deleteNote } from '../edit-mode/deleteNote';
import { NoteOffsetsCompnent } from './NoteOffsets';
import { UpdateNotePhrase } from './UpdateNotePhrase';
export class DeleteNoteComponent extends Component<{
  noteGroup: VerseNoteGroup;
  verseNoteID: string;
}> {
  click() {
    deleteNote(this.props.verseNoteID, this.props.noteGroup).subscribe(o => {});
  }
  render() {
    return (
      <a
        onClick={() => this.click()}
        className={'delete is-small show-edit-mode'}
        style={{ position: 'fixed', right: '10px' }}
      ></a>
    );
  }
}
export class EditModeComponent extends Component<{
  noteGroup: VerseNoteGroup;
  verseNoteID: string;
}> {
  render() {
    return (
      <div
        className={`edit-mode-offsets ${
          this.props.noteGroup.notes[0].formatTag.offsets &&
          this.props.noteGroup.notes[0].formatTag.offsets.length === 0
            ? 'none'
            : ''
        }`}
      >
        <NoteOffsetsCompnent
          noteGroup={this.props.noteGroup}
          verseNodeID={this.props.verseNoteID}
        ></NoteOffsetsCompnent>
        <br />
      </div>
    );
  }
}
