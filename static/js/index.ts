import { DocumentFile as Document } from '../ts/classes/documentFile.class';
import { File } from '../ts/classes/file.class';

const test = new Document(new File());
test.processAction();
