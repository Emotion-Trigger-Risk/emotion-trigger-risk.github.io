// ── Reference Data (embedded from eval files) ──

const EMOTION_TABLE = `Sr. No.\tExact Quote (Cause/Event)\tPrimary Half Quadrant (number only)\tSecondary Half Quadrant (number only)\tMedia Element (Cause Equivalent)\tEmotion (Wheel Term)
1\t"colors immediately affect emotions"\t1\t2\tColor: general color stimulus\tstimulated
2\t"color plays a major role in triggering direct emotional responses"\t1\t2\tColor: general color stimulus\tstimulated
3\t"colors influence users' emotions"\t1\t2\tColor: general color influence\tstimulated
4\t"typography can provoke an immediate emotional response"\t1\t2\tTypography: general typographic stimulus\tstimulated
5\t"they can evoke specific feelings in users"\t1\t2\tTypography: font usage (general)\tstimulated
6\t"designers can influence users' moods, perceptions, and behaviors"\t1\t2\tSound: general sound cues (earcons, auditory icons, sonification)\tstimulated
7\t"quick emotional responses are created by the users toward the design based on the user's interactions and perceptions"\t1\t2\tVisual Design: overall aesthetics / first impression\tstimulated
8\t"The visceral phase focuses on things like color and overall look and feel."\t1\t2\tVisual Design: color and overall look & feel\tstimulated
9\t"Imagery can convey sense and promote the mood of an experience."\t1\t2\tVisual: imagery (general)\tstimulated
10\t"their powerful emotional sway over app users"\t1\t2\tVisual: imagery (general)\tstimulated
11\t"might elicit diverging emotional responses"\t1\t2\tVisual: imagery (general)\tstimulated
12\t"A design's form and shape have the capacity to evoke strong emotions in users"\t1\t2\tVisual: form and shape\tstimulated
13\t"emotions are stronger in colored environments"\t1\t2\tColor: saturated colored environments\tstimulated
14\t"the red color influences behavior considerably"\t1\t2\tColor: red (dominant hue)\tstimulated
15\t"Color influence produces emotional changes"\t1\t2\tColor: general color stimulus\tstimulated
16\t"color draws attention to the emotions present in the text."\t1\t2\tTypography: colored text emphasis\tfocused
17\t"Color was easily understood to emphasize emotion"\t1\t2\tTypography: color emphasis\tfocused
18\t"The boldness of text was helpful for emphasizing points."\t1\t2\tTypography: bold text\tfocused
19\t"understanding and considering emotions in real-time interaction is crucial for leading the users to specific behaviors"\t1\t2\tUI: emotion-aware interaction\tfocused
20\t"change the UI to impact their emotions"\t1\t2\tUI: adaptive interface changes (general)\tstimulated
21\t"participants' surprise intensity level is triggered by showing a pop-up dialogue and/or Satellite v.s. Street map view."\t1\t2\tUI: pop-up + map type change\tsurprised
22\t"This incongruity generated an emotion: surprise, leading to a desire to know more, curiosity."\t1\t2\tVisual Design: unexpected visual metaphor (piano stairs)\tsurprised, curious
23\t"positive valence improves attention and positive judgments"\t1\t2\tVisual Design: positive emotional tone (general interface aesthetics)\tattentive
24\t"a fading-color effect on the navigation bar buttons"\t1\t2\tColor + Interaction: dynamic color feedback\tinterested
25\t"animation features"\t1\t2\tMotion: animation\tstimulated
26\t"Online, involvement implies a user emotional response that includes absorption and excitement with website characteristics"\t1\t2\tInteraction + Visuals: engaging website features\texcited
27\t"images have been found to attract viewer attention"\t1\t2\tImagery: photographs/images\tattentive
28\t"photographs of faces attract attention and create an immediate affective response"\t1\t2\tImagery: facial images\tattentive, engaged
29\t"red is stimulating"\t1\t2\tColor: red (high saturation, warm)\texcited
30\t"improve users' attitude and motivate them as they increase alertness and concentration"\t1\t2\tVisual Design: color schemes & interface styling\talert
31\t"pink and yellow color samples" (stimulating effects)\t1\t2\tColor: pink, yellow (bright, warm)\tstimulated
32\t"strong color (especially red) and patterns put the brain into a more excited state"\t1\t2\tColor: strong/high saturation + patterns\texcited
33\t"Some colors are able to arouse and excite an individual, while other colors elicit relaxation"\t1\t6\tColor: hue/brightness/saturation variations\texcited, relaxed
34\t"green elicits the feelings of excitement, relaxation and vividness as well as of boredom and depression"\t1\t6\tColor: green\texcited, relaxed
35\t"warm colors like red and orange create feelings of energy and excitement"\t1\t8\tColor: red, orange (warm, saturated)\texcited
36\t"uses bold typography to evoke strength and energy"\t1\t8\tTypography: bold fonts\tenergetic, strong
37\t"sound can heighten a product's visceral appeal"\t1\t8\tSound: general sound design\texcited
38\t"emotionally engaging user experience"\t1\t8\tSound: interactive sound feedback\tengaged
39\t"letting users imagine how they would feel while interacting with the system"\t1\t8\tInteraction Design: prototyping / simulated interaction\tengaged
40\t"Dynamic visuals would be ideal for sports apps to increase user enthusiasm"\t1\t8\tVisual: dynamic imagery\texcited
41\t"they evoke more engagement and allow users to relate to the content more instinctively."\t1\t8\tVisual: imagery vs text\tengaged
42\t"bold contrasts and sharp lines may suggest energy or precision."\t1\t8\tVisual: high contrast + sharp lines\tenergetic
43\t"making them more relatable and emotionally engaging."\t1\t8\tVisual: illustrations / photos / animations\tengaged
44\t"These tiny moments help bring personality to the app and create a sense of interaction with the product."\t1\t8\tInteraction: micro-interactions (subtle animations)\tengaged
45\t"making the app more appealing to customers and increasing customer loyalty, and keeping it fashionable and engaging"\t1\t8\tInteraction: animations and micro-interactions\tengaged
46\t"participants had a preference for color to express emotion"\t1\t8\tTypography: color in text\tengaged
47\t"participants in the color condition reported the highest average agreement with this statement"\t1\t8\tTypography: colored text\tengaged
48\t"Styles gave the text more personality"\t1\t8\tTypography: expressive styles\tengaged
49\t"Colored text I read more passionately and felt more emotion from it"\t1\t8\tTypography: colored text\texcited, engaged
50\t"an animated page transition"\t1\t8\tMotion: animation (transitions)\tengaged
51\t"a graphical design elicits enjoyment or excitement"\t1\t8\tVisual Design: graphical layout & elements\tenjoyment, excited
52\t"If the website permits involvement for the user, then it will result in an affective response"\t1\t8\tInteraction: interactivity\tinvolved
53\t"creating urgency and engagement"\t2\t1\tSound: rising tone (sonification)\tanxious, engaged
54\t"brief exposure to red prior to a test unconsciously enhances the performance of the participants."\t2\t1\tColor: red (high salience)\talert
55\t"red may be used for alerts to signify urgency or danger"\t2\t3\tColor: red (alerts, high salience)\tanxious, alarmed
56\t"Bold and large fonts can create a sense of urgency"\t2\t3\tTypography: bold, large fonts\tanxious
57\t"a link between red and avoidance motivation is discovered."\t2\t3\tColor: red (warning/avoidance cue)\tanxious
58\t"made me think about that rather than the story."\t2\t3\tTypography: irregular spacing/styles\tdistracted
59\t"people tend to show intensive emotions in simulated danger"\t2\t3\tContext/UI: emergency simulation interface\tanxious
60\t"participants' fear intensity level is triggered by the background color as a UI parameter."\t2\t3\tColor: background color (UI theme)\tfear
61\t"the overall style and design may have a dramatic effect on the user"\t2\t3\tVisual Design: overall style (color, shape, sound)\taffected`;

const HEALTH_TABLE = `Sr. No.\tDisease Context\tDisease Quadrant\tEmotion Aggravator
1\tSubstance abuse - craving and relapse\t1-2\tCraving, Compulsion
2\tGeneral cancer - work pressure, financial stress, relationship conflict, emotional holding-in, long-term stress\t2-3\tAnxiety, Anger, Stress
3\tGeneral cancer, migraine, psychiatric illness - stress, anger, worry, fear\t2-3\tAnxiety, Fear, Worry
4\tCoronary heart disease - life stress, work stress, financial stress, hostility\t2-3\tAnxiety, Anger, Stress
5\tHypertension - held-in anger, emotional stress, study-related stress\t2-3\tAnxiety, Anger
6\tRheumatoid arthritis - harsh family environment\t2-3\tFear
7\tAutism spectrum disorder - anxiety, uncertainty, difficulty with change\t2-3\tAnxiety, Fear
8\tObsessive disorder - unwanted thoughts, fear of losing control, avoidance behavior\t2-3\tFear, Anxiety
9\tBurnout - heavy workload, emotional exhaustion, lack of resources\t2-3\tAnxiety, Stress
10\tSubstance abuse - stress as a trigger for drug use and relapse\t2-3\tAnxiety
11\tAnxiety disorder - ongoing anxiety, avoidance, excessive worry\t2-3\tAnxiety, Fear
12\tInsomnia - pre-sleep worry, tension, obsessive thinking\t2-3\tAnxiety
13\tDepression - repeated negative thinking, perceived threat, anticipatory stress\t2-3\tAnxiety, Fear
14\tPTSD / depression - exposure to traumatic events\t2-3\tFear
15\tPanic disorder - anticipatory anxiety, conditioned fear, bodily hypervigilance\t2-3\tAnxiety, Fear
16\tNeuroses - higher than average number of stressful life events\t2-3\tAnxiety
17\tGeneral cancer - daily pressures, frustration, family conflict\t3-4\tIrritation, Frustration, Distress
18\tMigraine - sensitivity to light/noise, irritability, feeling overwhelmed\t3-4\tIrritation, Overwhelm
19\tPsychiatric illness - stressful life events, long-term stress\t3-4\tDistress
20\tNeuroses - above-average exposure to life changes\t3-4\tDistress
21\tCoronary heart disease - major life events, suppressed anger\t3-4\tDistress, Anger
22\tHypertension - emotional over-reactivity\t3-4\tSensitivity
23\tAutism spectrum disorder - sensory overload, difficulty labeling emotions\t3-4\tOverwhelm, Confusion
24\tObsessive disorder - feelings of disgust, moral distress\t3-4\tDisgust
25\tBurnout - cynicism, social withdrawal, poor fit between person and job\t3-4\tCynicism, Distress
26\tSubstance abuse - stress-linked increase in drug use\t3-4\tDistress
27\tInsomnia - distressing and unwanted thoughts\t3-4\tDistress
28\tDepression - poor emotion management, negative thinking patterns, repeated distressing thoughts\t3-4\tDistress, Overwhelm
29\tPanic disorder - misreading body signals as signs of danger\t3-4\tConfusion, Fear
30\tGeneral cancer - guilt, resentment, long-term stress, helplessness\t4-5\tGuilt, Helplessness
31\tCancer mortality risk - loss and loneliness\t4-5\tLonely, Gloomy
32\tProstate cancer - lack of close relationships\t4-5\tLonely, Insecure
33\tDepression - long-term stress, emotional suppression, poor coping\t4-5\tHelplessness, Suppression
34\tDepression / anxiety / PTSD - difficulty managing emotions\t4-5\tHelplessness
35\tRheumatoid arthritis - ongoing stress, feeling rejected\t4-5\tHelplessness, Rejection
36\tHypertension - low self-confidence\t4-5\tInsecurity
37\tObsessive disorder - shame, guilt, moral self-blame\t4-5\tShame, Guilt
38\tBurnout - feelings of failure, lack of support or resources\t4-5\tHelplessness
39\tSubstance abuse - long-term stress and inability to cope\t4-5\tHelplessness
40\tGeneral cancer - loss of a loved one, social isolation\t5-4\tSad, Grieving
41\tProstate cancer - low social support\t5-4\tLonely, Sad
42\tDepression - stress-triggered onset, low mood\t5-6\tSadness
43\tRheumatoid arthritis - depressive personality traits, emotional distress\t5-6\tSadness
44\tInsomnia - low mood, negative emotional state\t5-6\tSadness
45\tDepression - early-life difficulty\t5-6\tSadness
46\tHealthy coping, good emotion management\t6-7\tCalm, Control
47\tAbility to adapt coping strategies\t7-8\tAdaptability`;

const PROMPT_TEXT = `You are an Image Evaluator tasked with finding elements of an image and their intensity in that image. You base your findings only from emotion_table.md and health_table.md. You will execute instructions in 4 parts below.

Part A:
You will go through every row of emotion_table.md and see whether those elements are present in the image and with what intensity. For each set of images given to you, give me a table. Use the following short column headers exactly as written:
1. "Image" (the file name)
2. "Row" (the row number found)
3. "Intensity" (how prominent it is)
4. "Location" (where in the image)
5. "Primary Quad" (primary half quadrant)
6. "Secondary Quad" (secondary half quadrant)
7. "Emotion" (the Wheel Term)
8. "Explanation" (why you chose these values)
9. "Confidence" (scale 0 to 1)

Part B:
Take the average of intensities belonging to the same primary and secondary quadrant combination. This is your average emotion trigger score for that combination. Your Part B table headers must be:
1. "Image"
2. "Quad Combo" (Primary-secondary combination)
3. "Trigger Score" (average intensity)
4. "Avg Confidence"
5. "Emotions" (concatenated Wheel Terms)

Part C:
You will go through every row of health_table.md. For each combination found in Part B, output a table with these headers:
1. "Image"
2. "Quad Combo"
3. "Trigger Score"
4. "Health Row" (row number from health_table.md)
5. "Causes" (causes mentioned in health_table.md)
6. "Diseases" (diseases mentioned in health_table.md)

Part D:
Collect the findings from Part A, B, C into a final summary table (one row per quadrant combination per image) with these headers:
1. "Image"
2. "Quad Combo"
3. "Emotions"
4. "Trigger Score"
5. "Causes Summary" (a brief, concise summary of the underlying causes, do not list everything)
6. "Diseases"
7. "Confidence"

Final Output Format:
Part A
Part B
Part C
Part D`;

// ── DOM Elements ──

const apiKeyInput = document.getElementById('api-key');
const modelSelect = document.getElementById('model-select');
const dropZone = document.getElementById('drop-zone');
const imageInput = document.getElementById('image-input');
const dropContent = document.getElementById('drop-content');
const preview = document.getElementById('preview');
const analyzeBtn = document.getElementById('analyze-btn');
const outputSection = document.getElementById('output-section');
const outputContent = document.getElementById('output-content');
const copyBtn = document.getElementById('copy-btn');
const loader = document.getElementById('loader');
const errorMsg = document.getElementById('error-msg');

let selectedFile = null;

// ── Image Upload Handling ──

dropZone.addEventListener('click', () => imageInput.click());

dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});

imageInput.addEventListener('change', () => {
  if (imageInput.files.length) handleFile(imageInput.files[0]);
});

function handleFile(file) {
  if (!file.type.startsWith('image/')) return;
  selectedFile = file;
  const reader = new FileReader();
  reader.onload = e => {
    preview.src = e.target.result;
    preview.classList.remove('hidden');
    dropContent.classList.add('hidden');
  };
  reader.readAsDataURL(file);
  updateBtn();
}

function updateBtn() {
  analyzeBtn.disabled = !(apiKeyInput.value.trim() && selectedFile);
}

apiKeyInput.addEventListener('input', updateBtn);

// ── Raw text store for copy ──
let rawResultText = '';

// ── Copy Button ──

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(rawResultText).then(() => {
    const orig = copyBtn.innerHTML;
    copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
    setTimeout(() => { copyBtn.innerHTML = orig; }, 1500);
  });
});

// ── Analysis ──

analyzeBtn.addEventListener('click', runAnalysis);

async function runAnalysis() {
  const apiKey = apiKeyInput.value.trim();
  const model = modelSelect.value;
  if (!apiKey || !selectedFile || !model) return;

  errorMsg.classList.add('hidden');
  outputSection.classList.add('hidden');
  loader.classList.remove('hidden');
  analyzeBtn.disabled = true;

  try {
    const base64 = await fileToBase64(selectedFile);
    const imgType = selectedFile.type || 'image/jpeg';
    const fileName = selectedFile.name;

    const systemContext = `
Here are the reference tables you must use strictly for your evaluation:

<emotion_table.md>
${EMOTION_TABLE}
</emotion_table.md>

<health_table.md>
${HEALTH_TABLE}
</health_table.md>

Instructions:
${PROMPT_TEXT}

The image file name is: ${fileName}
Note: Do not output markdown codeblocks (like \`\`\`markdown), just output the raw text for the 4 parts.
Use pipe-delimited tables with | separators for all Parts A through D.
    `;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.href,
        'X-Title': 'Emotional Trigger Risk Analyzer',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: systemContext },
            { type: 'image_url', image_url: { url: `data:${imgType};base64,${base64}` } }
          ]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `API error: ${response.status}`);
    }

    const result = data.choices?.[0]?.message?.content;
    if (!result) {
      throw new Error('The model returned an empty response. Try a different model.');
    }

    rawResultText = result;
    outputContent.innerHTML = renderOutput(result);
    outputSection.classList.remove('hidden');

  } catch (err) {
    errorMsg.textContent = err.message;
    errorMsg.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
    updateBtn();
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ── Render Output as Formatted HTML ──

function renderOutput(text) {
  // Split into lines
  const lines = text.split('\n');
  let html = '';
  let tableRows = [];
  let inTable = false;

  function escapeHtml(str) {
    return str.replace(/\*/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function flushTable() {
    if (tableRows.length === 0) return '';
    const headerRow = tableRows[0];
    let startIdx = 1;
    // Skip separator row (---|---|---)
    if (tableRows.length > 1 && /^[-|:\s]+$/.test(tableRows[1].map(c => c.trim()).join(''))) {
      startIdx = 2;
    }
    let t = '<div class="table-wrapper"><table><thead><tr>';
    for (const cell of headerRow) {
      t += `<th>${escapeHtml(cell.trim())}</th>`;
    }
    t += '</tr></thead><tbody>';
    for (let i = startIdx; i < tableRows.length; i++) {
      t += '<tr>';
      for (let j = 0; j < headerRow.length; j++) {
        const val = tableRows[i][j] !== undefined ? tableRows[i][j].trim() : '';
        t += `<td>${escapeHtml(val)}</td>`;
      }
      t += '</tr>';
    }
    t += '</tbody></table></div>';
    tableRows = [];
    inTable = false;
    return t;
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect Part headers (various formats: "Part A", "# PART A", "## Part A", "**Part A**")
    const partMatch = trimmed.match(/^(?:#{1,3}\s*)?(?:\*{1,2})?(?:PART|Part)\s*([A-D])(?:\*{1,2})?[\s:]*$/i);
    if (partMatch) {
      html += flushTable();
      const partLetter = partMatch[1].toUpperCase();
      const partLabels = { A: 'Emotion Detection', B: 'Quadrant Averages', C: 'Health Correlations', D: 'Summary' };
      html += `<h3 class="part-heading">Part ${partLetter}: ${partLabels[partLetter] || ''}</h3>`;
      continue;
    }

    // Skip separator-only lines (---|---|---)
    if (/^[-|:\s]+$/.test(trimmed) && trimmed.includes('---')) {
      continue;
    }

    // Detect pipe-delimited table rows
    if (trimmed.includes('|')) {
      const cells = trimmed.split('|').map(c => c.trim()).filter((_, i, arr) => {
        // Remove empty leading/trailing from pipe format
        if (i === 0 && arr[i] === '') return false;
        if (i === arr.length - 1 && arr[i] === '') return false;
        return true;
      });
      if (cells.length >= 2 && !/^[-:\s]+$/.test(cells.join(''))) {
        inTable = true;
        tableRows.push(cells);
        continue;
      }
    }

    // Detect tab-delimited table rows
    if (trimmed.includes('\t')) {
      const cells = trimmed.split('\t');
      if (cells.length >= 2) {
        inTable = true;
        tableRows.push(cells);
        continue;
      }
    }

    // Regular text line
    html += flushTable();
    if (trimmed) {
      html += `<p class="part-text">${escapeHtml(trimmed)}</p>`;
    }
  }

  html += flushTable();
  return html;
}
