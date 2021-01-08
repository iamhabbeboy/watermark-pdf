import { FileInterface } from '../ts/interfaces/file.Interface';
import { StampFile as Stamp } from '../ts/classes/stampFile.class';
import { DocumentFile as Document } from '../ts/classes/documentFile.class';

function app(file: FileInterface) {
  return file.processAction();
}

app(new Document());
app(new Stamp());
