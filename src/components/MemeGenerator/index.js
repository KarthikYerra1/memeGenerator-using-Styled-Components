import {Component} from 'react'

import {
  MainContainer,
  MainHeading,
  FormContainer,
  InputContainer,
  Label,
  Input,
  Option,
  Button,
  ImageContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    activeFontSizeId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    imageUrl: '',
    bgImage: '',
    upperText: '',
    downText: '',
    fontSize: '',
    showImage: false,
  }

  onChangeImageInput = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeActiveOption = event => {
    this.setState({activeFontSizeId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {activeFontSizeId, topText, bottomText, imageUrl} = this.state
    this.setState({
      showImage: true,
      bgImage: imageUrl,
      upperText: topText,
      downText: bottomText,
      fontSize: activeFontSizeId,
    })
  }

  render() {
    const {
      activeFontSizeId,
      topText,
      imageUrl,
      bottomText,
      bgImage,
      fontSize,
      upperText,
      downText,
      showImage,
    } = this.state
    return (
      <MainContainer>
        <MainHeading sm>Meme Generator</MainHeading>
        {showImage && (
          <ImageContainer bgImage={bgImage} data-testid="meme">
            <Text fontSize={fontSize}>{upperText}</Text>
            <Text fontSize={fontSize}>{downText}</Text>
          </ImageContainer>
        )}
        <FormContainer onSubmit={this.onSubmitForm}>
          <MainHeading>Meme Generator</MainHeading>
          <InputContainer>
            <Label htmlFor="image-url">Image Url</Label>
            <Input
              id="image-url"
              placeholder="Enter the image URL"
              value={imageUrl}
              onChange={this.onChangeImageInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="top-text">Top Text</Label>
            <Input
              id="top-text"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="bottom-text">Bottom Text</Label>
            <Input
              id="bottom-text"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="select">Font Size</Label>
            <Input
              as="select"
              id="select"
              name="select"
              value={activeFontSizeId}
              onChange={this.onChangeActiveOption}
            >
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </Option>
              ))}
            </Input>
          </InputContainer>
          <Button type="submit">Generate</Button>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
