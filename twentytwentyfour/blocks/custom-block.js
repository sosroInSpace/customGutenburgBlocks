(function () {
  const { registerBlockType } = wp.blocks;
  const { TextControl, Button } = wp.components;
  const { MediaUpload } = wp.editor;

  registerBlockType('your-theme/custom-block', {
    title: 'Custom Block',
    icon: 'smiley',
    category: 'media',
    attributes: {
      mp3URL: {
        type: 'string',
        default: '',
      },
      content: {
        type: 'string',
        default: 'Heading',
      },
    },
    edit: function (props) {
      const { mp4URL, content } = props.attributes;

      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }

      function onSelectMedia(media) {
        props.setAttributes({ mp3URL: media.url });
      }

      return (
        <div>
          <h3>Full width video</h3>
          <TextControl
            label="Content"
            value={content}
            onChange={onChangeContent}
          />
          <label>Upload your video (mp4 formatt)</label>
          <MediaUpload
            onSelect={onSelectMedia}
            allowedTypes={['video']}
            value={mp4URL}
            render={({ open }) => (
              <Button onClick={open}>Select MP4 File</Button>
            )}
          />
        </div>
      );
    },
    save: function (props) {
      const { mp4URL, content } = props.attributes;
      return (
        <div>
          <h3>{content}</h3>
          {mp4URL && <video controls style={{width:'100%',height:'auto'}}src={mp4URL} />}
        </div>
      );
    },
  });
})();
