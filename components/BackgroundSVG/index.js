import AzureSVG from '../../static/svg/azure.svg';
import AzureLight from '../../static/svg/azure_light.svg';
import BigBlob from '../../static/svg/big_blob.svg';
import BigBlobLight from '../../static/svg/big_blob_light.svg';

export default () => {

    return(
        <div className="svg-container">
            <BigBlob width="35%" height="35%" className="big-blob" />
            <BigBlobLight width="38%" height="38%" className="big-blob-light" />

            <AzureSVG width="80%" height="80%" className="blue-azure" />
            <AzureLight width="83%" height="83%" className="blue-azure-light" />
        </div>
    )
}