"use strict";

(function () {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    TextControl,
    Button
  } = wp.components;
  const {
    MediaUpload
  } = wp.editor;
  registerBlockType('your-theme/custom-block', {
    title: 'Custom Block',
    icon: 'smiley',
    category: 'media',
    attributes: {
      mp3URL: {
        type: 'string',
        default: ''
      },
      content: {
        type: 'string',
        default: 'Heading'
      }
    },
    edit: function (props) {
      const {
        mp4URL,
        content
      } = props.attributes;
      function onChangeContent(newContent) {
        props.setAttributes({
          content: newContent
        });
      }
      function onSelectMedia(media) {
        props.setAttributes({
          mp3URL: media.url
        });
      }
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Full width video"), /*#__PURE__*/React.createElement(TextControl, {
        label: "Content",
        value: content,
        onChange: onChangeContent
      }), /*#__PURE__*/React.createElement("label", null, "Upload your video (mp4 formatt)"), /*#__PURE__*/React.createElement(MediaUpload, {
        onSelect: onSelectMedia,
        allowedTypes: ['video'],
        value: mp4URL,
        render: ({
          open
        }) => /*#__PURE__*/React.createElement(Button, {
          onClick: open
        }, "Select MP4 File")
      }));
    },
    save: function (props) {
      const {
        mp4URL,
        content
      } = props.attributes;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, content), mp4URL && /*#__PURE__*/React.createElement("video", {
        controls: true,
        style: {
          width: '100%',
          height: 'auto'
        },
        src: mp4URL
      }));
    }
  });
})();
