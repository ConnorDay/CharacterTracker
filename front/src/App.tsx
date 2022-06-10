import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterList, CharacterSheet } from "./routes/Character";
import { Campaign, CampaignList } from "./routes/Campaign";
import { RulesetList, Ruleset } from "./routes/Ruleset";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="header">
                    <p> hello world </p>
                </div>

                <Routes>
                    <Route path="/">
                        <Route index element={<>test</>} />
                        <Route path="character">
                            <Route index element={<CharacterList />} />
                            <Route
                                path=":character_id"
                                element={<CharacterSheet />}
                            />
                        </Route>
                        <Route path="campaign">
                            <Route index element={<CampaignList />} />
                            <Route path=":campaign_id" element={<Campaign />} />
                        </Route>
                        <Route path="ruleset">
                            <Route index element={<RulesetList />} />
                            <Route path=":ruleset_id" element={<Ruleset />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
