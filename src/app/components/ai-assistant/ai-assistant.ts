import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ai-assistant.html',
  styleUrl: './ai-assistant.scss'
})
export class AiAssistant {

  message = '';

  suggestions: string[] = [
    'Can you manufacture SG iron castings?',
    'What casting weights can you handle?',
    'Can I upload a drawing?',
    'Do you supply machined components?'
  ];

  messages: ChatMessage[] = [
    {
      sender: 'ai',
      text:
        'Hello. I can help you explore our casting capabilities and prepare your manufacturing requirement.'
    }
  ];

  sendSuggestion(question: string): void {
    this.message = question;
    this.sendMessage();
  }

  sendMessage(): void {
    const value = this.message.trim();

    if (!value) {
      return;
    }

    this.messages.push({
      sender: 'user',
      text: value
    });

    this.message = '';

    setTimeout(() => {
      this.messages.push({
        sender: 'ai',
        text: this.getResponse(value)
      });
    }, 350);
  }

  private getResponse(message: string): string {
    const text = message.toLowerCase();

    if (
      text.includes('sg iron') ||
      text.includes('ductile')
    ) {
      return 'Yes. Ductile / SG iron can be considered for automotive, agricultural and industrial components. Share the material grade, component weight and drawing for a detailed manufacturing review.';
    }

    if (
      text.includes('weight') ||
      text.includes('kg')
    ) {
      return 'Casting weight capability depends on the component geometry, material and production process. Share the approximate weight and drawing so the requirement can be reviewed accurately.';
    }

    if (
      text.includes('drawing') ||
      text.includes('upload')
    ) {
      return 'Yes. You can submit your component drawing along with material grade, annual quantity and other specifications through the RFQ section.';
    }

    if (
      text.includes('machin') ||
      text.includes('finished')
    ) {
      return 'Machining can be included as part of the manufacturing requirement. Share the drawing, tolerances and required finished condition for review.';
    }

    if (
      text.includes('quantity') ||
      text.includes('volume')
    ) {
      return 'Production requirements can be reviewed based on annual volume, batch size, component complexity and tooling requirements. Include your estimated annual quantity with the RFQ.';
    }

    return 'This requirement can be reviewed by the engineering team. Please share the component drawing, material grade, approximate weight and expected annual quantity for a more accurate assessment.';
  }

}