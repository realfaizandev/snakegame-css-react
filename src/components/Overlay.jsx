export default function Overlay() {
    return (
        <svg className="overlay" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="lad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#8B2500" }} />
                    <stop offset="50%" style={{ stopColor: "#cc4400" }} />
                    <stop offset="100%" style={{ stopColor: "#8B2500" }} />
                </linearGradient>
            </defs>

            {/* LADDER A: 9→34 */}
            <g stroke="url(#lad)" strokeWidth="5" fill="none" strokeLinecap="round">
                <line x1="113" y1="440" x2="113" y2="210" />
                <line x1="127" y1="440" x2="127" y2="210" />
                <line x1="113" y1="415" x2="127" y2="415" />
                <line x1="113" y1="390" x2="127" y2="390" />
                <line x1="113" y1="365" x2="127" y2="365" />
                <line x1="113" y1="340" x2="127" y2="340" />
                <line x1="113" y1="315" x2="127" y2="315" />
                <line x1="113" y1="290" x2="127" y2="290" />
                <line x1="113" y1="265" x2="127" y2="265" />
                <line x1="113" y1="240" x2="127" y2="240" />
                <line x1="113" y1="215" x2="127" y2="215" />
            </g>

            {/* LADDER B: 19→24 */}
            <g stroke="url(#lad)" strokeWidth="5" fill="none" strokeLinecap="round">
                <line x1="193" y1="360" x2="193" y2="285" />
                <line x1="207" y1="360" x2="207" y2="285" />
                <line x1="193" y1="340" x2="207" y2="340" />
                <line x1="193" y1="318" x2="207" y2="318" />
                <line x1="193" y1="296" x2="207" y2="296" />
            </g>

            {/* LADDER C: 40→46 */}
            <g stroke="url(#lad)" strokeWidth="5" fill="none" strokeLinecap="round">
                <line x1="353" y1="120" x2="273" y2="48" />
                <line x1="367" y1="120" x2="287" y2="48" />
                <line x1="350" y1="105" x2="364" y2="105" />
                <line x1="338" y1="87" x2="352" y2="87" />
                <line x1="324" y1="70" x2="338" y2="70" />
                <line x1="308" y1="56" x2="322" y2="56" />
            </g>

            {/* SNAKE 1 */}
            <path d="M 120,48 C 145,75 175,90 165,125 C 155,160 110,162 105,198 C 100,233 140,238 132,270"
                stroke="#4a6030" strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 120,48 C 145,75 175,90 165,125 C 155,160 110,162 105,198 C 100,233 140,238 132,270"
                stroke="#2a3a18" strokeWidth="5" fill="none" strokeDasharray="12,9" strokeLinecap="round" />
            <path d="M 120,48 C 145,75 175,90 165,125 C 155,160 110,162 105,198 C 100,233 140,238 132,270"
                stroke="rgba(180,210,100,0.25)" strokeWidth="8" fill="none" strokeDasharray="6,15" strokeLinecap="round" />
            <ellipse cx="120" cy="42" rx="14" ry="11" fill="#3a5022" stroke="#1e2e10" strokeWidth="2" />
            <circle cx="114" cy="38" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="126" cy="38" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="114" cy="38" r="2" fill="#111" />
            <circle cx="126" cy="38" r="2" fill="#111" />
            <circle cx="115" cy="37" r="0.8" fill="white" />
            <circle cx="127" cy="37" r="0.8" fill="white" />
            <path d="M 120,53 L 117,60 M 120,53 L 123,60" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* SNAKE 2 */}
            <path d="M 280,205 C 315,218 360,210 375,242 C 390,274 348,285 355,315 C 362,345 400,348 395,362"
                stroke="#1aadad" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 280,205 C 315,218 360,210 375,242 C 390,274 348,285 355,315 C 362,345 400,348 395,362"
                stroke="#ffd700" strokeWidth="5" fill="none" strokeDasharray="0,14" strokeLinecap="round" />
            <ellipse cx="280" cy="199" rx="14" ry="11" fill="#0e8888" stroke="#075555" strokeWidth="2" />
            <circle cx="274" cy="195" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="286" cy="195" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="274" cy="195" r="2" fill="#111" />
            <circle cx="286" cy="195" r="2" fill="#111" />
            <circle cx="275" cy="194" r="0.8" fill="white" />
            <circle cx="287" cy="194" r="0.8" fill="white" />
            <path d="M 280,210 L 277,217 M 280,210 L 283,217" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* SNAKE 3 */}
            <path d="M 443,48 C 490,60 520,88 505,118 C 490,148 450,148 448,178 C 446,202 475,200 472,205"
                stroke="#8899cc" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 443,48 C 490,60 520,88 505,118 C 490,148 450,148 448,178 C 446,202 475,200 472,205"
                stroke="#556688" strokeWidth="5" fill="none" strokeDasharray="9,8" strokeLinecap="round" />
            <path d="M 443,48 C 490,60 520,88 505,118 C 490,148 450,148 448,178 C 446,202 475,200 472,205"
                stroke="rgba(200,220,255,0.3)" strokeWidth="9" fill="none" strokeDasharray="5,13" strokeLinecap="round" />
            <ellipse cx="440" cy="42" rx="14" ry="11" fill="#6677aa" stroke="#445588" strokeWidth="2" />
            <circle cx="434" cy="38" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="446" cy="38" r="4" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="434" cy="38" r="2" fill="#111" />
            <circle cx="446" cy="38" r="2" fill="#111" />
            <circle cx="435" cy="37" r="0.8" fill="white" />
            <circle cx="447" cy="37" r="0.8" fill="white" />
            <path d="M 440,53 L 437,60 M 440,53 L 443,60" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* SNAKE 4 */}
            <path d="M 203,518 C 232,504 265,516 295,504 C 325,492 358,508 388,500 C 410,494 432,510 442,520"
                stroke="#aaccbb" strokeWidth="17" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 203,518 C 232,504 265,516 295,504 C 325,492 358,508 388,500 C 410,494 432,510 442,520"
                stroke="#667766" strokeWidth="4" fill="none" strokeDasharray="8,9" strokeLinecap="round" />
            <ellipse cx="200" cy="520" rx="13" ry="10" fill="#88aa99" stroke="#557766" strokeWidth="2" />
            <circle cx="194" cy="516" r="3.5" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="206" cy="516" r="3.5" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="194" cy="516" r="1.8" fill="#111" />
            <circle cx="206" cy="516" r="1.8" fill="#111" />
            <circle cx="195" cy="515" r="0.7" fill="white" />
            <circle cx="207" cy="515" r="0.7" fill="white" />
            <path d="M 200,530 L 197,537 M 200,530 L 203,537" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
    );
}