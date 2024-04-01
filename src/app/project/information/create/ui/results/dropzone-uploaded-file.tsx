export default function DropzoneUploadedFile() {
  return (
    <div className="mt-[30.833vh] px-30 w-full">
      <div className="dropzone-uploads hidden">
        <p className="text-darkblue font-latobold">my floorplans</p>
        <div className="dropzone-content mt-10 flex flex-wrap">
          {/* <!-- Uploaded files will automatically be shown here --> */}
          <span></span>
        </div>
      </div>
    </div>
  );
}